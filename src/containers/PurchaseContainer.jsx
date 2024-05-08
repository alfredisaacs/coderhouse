import { useState } from 'react'
import useCart from '../hooks/useCart'
import Countries from '../assets/countries.json'
import './PurchaseContainer.css'
import { toast } from 'react-toastify'
import { setPurchase } from '../utils'
import SuccessContainer from './SuccessContainer'

const CartContainer = () => {
    const contextValue = useCart()
    const [finalPrice, setFinalPrice] = useState(0)
    const [formError, setFormError] = useState(false)
    const [purchaseId, setPurchaseId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        address: '',
        email: '',
        city: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const isFieldEmpty = (fieldValue) => {
        return fieldValue.length < 3 && fieldValue.length != 0
    }

    const isEmailValid = (email) => {
        if(email.length !== 0 ) {
            return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        }
    }

    const transformProducts = (products) => {
        return products.map(product => {
            return {
                id: product.id,
                quantity: product.quantity
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name === '' || formData.lastName === '' || formData.phone === '' || formData.address === '' || formData.email === '' || formData.city === '' || formData.country === '') {
            setFormError(true)
        } else {
            setFormError(false)
            if(contextValue.totalPrice !== 0) {
                setPurchase(formData, transformProducts(contextValue.addedItems), contextValue.totalPrice)
                .then((result) => {
                    toast.success('Thanks for your purchase!')
                    setPurchaseId(result.id)
                    setFinalPrice(contextValue.totalPrice)
                    contextValue.emptyCart()
                })
                .catch(() => {
                    toast.error('Something went wrong. Please try again.')
                })}
        }
    }

    return (
        <div>
            <h1>Cart checkout</h1>
            {
                !purchaseId ? 
            <div className="purchase__form">
                <div>
                    {contextValue.totalPrice === 0 && <p className="text-red-500 text-xs italic">You have not products to buy in your cart.</p>}
                    {formError && <p className="text-red-500 text-xs italic">Please check the fields.</p>}
                    <form className="w-full max-w-lg mt-10 mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> 
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="grid-first-name"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={formData.name}
                                    placeholder='Name'
                                    onBlur={isFieldEmpty}
                                    onChange={handleChange}
                                />
                                {isFieldEmpty(formData.name) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="grid-last-name"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={formData.lastName}
                                    placeholder='Last Name'
                                    onChange={handleChange}
                                />
                                {isFieldEmpty(formData.lastName) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> 
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    id="grid-phone"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={formData.phone}
                                    placeholder='Phone'
                                    onChange={handleChange}
                                />
                                {isFieldEmpty(formData.phone) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="grid-email"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={formData.email}
                                    placeholder='Email'
                                    onChange={handleChange}
                                />
                                {isEmailValid(formData.email) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="grid-address"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={formData.address}
                                    placeholder='Address'
                                    onChange={handleChange}
                                />
                                {isFieldEmpty(formData.address) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                            </div>
                        </div>


                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> 
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="grid-city"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={formData.city}
                                    placeholder='City'
                                    onChange={handleChange}
                                />
                                {isFieldEmpty(formData.city) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-country">
                                    Country
                                </label>
                                <select
                                    id="grid-country"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                >
                                    {Countries.map((country, index) => (
                                        <option key={index} value={country.code}>{country.name}</option>
                                    ))}
                                </select>
                                {isFieldEmpty(formData.country) === '' && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                            </div>
                        </div>
                    </form>
                </div>

                <div className="block mt-7 text-center font-bold text-xl my-10">
                    Total price: ${contextValue.totalPrice.toLocaleString()}
                </div>

                <button className="btn btn-primary ml-5 bg-slate-600 text-white" onClick={handleSubmit}>Checkout</button>
            </div>
            :
            <SuccessContainer
                purchaseId={purchaseId}
                address={formData.address}
                name={formData.name}
                lastName={formData.lastName}
                price={finalPrice}
            />
        }
        </div>
    )
}

export default CartContainer