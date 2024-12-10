import React, { useState, useEffect } from 'react';
import './App.css';

export const SignUpForm: React.FC = () => {
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const isNameValid = name.trim() !== '';
    const isLastNameValid = lastName.trim() !== '';
    const isEmailValid = email.trim() !== '';
    const isGenderValid = gender !== '';
    const isPhoneValid = phone.trim() !== '';
    const isPasswordValid = password.length >= 8;
    const isAddressValid = address.trim() !== '';
    const isTermsAccepted = termsAccepted;

    const isNextDisabled = !(
        isNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isGenderValid &&
        isPhoneValid &&
        isAddressValid &&
        isPasswordValid &&
        isTermsAccepted
    );

    const nextPage = () => {
        if (page < 2) {
            if (isNextDisabled) return;
            if (termsAccepted) {
                saveToLocalStorage();
            }
            setPage(page + 1);
        }
    };

    const saveToLocalStorage = () => {
        const userData = { name, lastName, email, gender, phone, address, password };
        localStorage.setItem('userData', JSON.stringify(userData));
        // If you want to remember user's data, you can save individual fields.  
        if (termsAccepted) {
            localStorage.setItem('userName', name);
            localStorage.setItem('userLastName', lastName);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPhone', phone);
            localStorage.setItem('userPassword', password);
            localStorage.setItem('userAddress', address);
        }
    };

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const userData = JSON.parse(storedData);
            setName(userData.name);
            setLastName(userData.lastName);
            setEmail(userData.email);
            setPhone(userData.phone);
            setAddress(userData.address);
            setPassword(userData.password);
            setGender(userData.gender);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {page === 1 && (
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl mt-4">Create Your Account</h1>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-4 border w-60 border-gray-300 px-6 py-3 rounded-full"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-4 border w-60 border-gray-300 px-6 py-3 rounded-full"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-4 border w-60 border-gray-300 px-6 py-3 rounded-full"
                    />
                    <input
                        type="password"
                        placeholder="Password (min 8 char)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-4 border w-60 border-gray-300 px-6 py-3 rounded-full"
                    />
                    {/* Gender Selection */}
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="mt-4 border w-60 border-gray-300 px-6 py-3 rounded-full"
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-4 border w-60 border-gray-300 px-6 py-3 rounded-full"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-4 border w-60 border-gray-300 px-6 py-3 rounded-full"
                    />

                    <label className="mt-2 flex items-center">
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <span className="ml-2">I accept the Terms and Privacy Policy</span>
                    </label>
                    <button onClick={nextPage} className="mt-6 p-2 w-48 bg-zinc-700 text-white rounded-full" disabled={isNextDisabled}>
                        Sign Up
                    </button>
                </div>
            )}

            {page === 2 && (
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl mt-4">Account Created</h1>
                    <div className="mt-4">
                        <p>Your account has been created successfully!</p>
                    </div>
                </div>
            )}
        </div>
    );
};