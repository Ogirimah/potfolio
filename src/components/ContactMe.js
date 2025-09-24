import React, { useState } from 'react';
import { Contact, X } from 'lucide-react';
import styles from '../styles/contactMe.module.css';

const ContactMe = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('"https://formbold.com/s/ozKj8"', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": email,
                    "name": name,
                    "message": message
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

        } catch (error) {
            alert(`Failed to send message: ${error}`);
        }
    };

    return (
        <div>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <h2>Submit your query here</h2>
                    <form onSubmit={handleSubmit} method='POST'>
                        <label htmlFor="names" className={styles.label}>
                            Name
                            <input
                                type="text"
                                value={name}
                                name='names'
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required
                                className={styles.input}
                            />
                        </label>
                        <label htmlFor="email" className={styles.label}>
                            Email
                            <input
                                type="email"
                                value={email}
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                className={styles.input}
                            />
                        </label>
                        <label htmlFor='text' className={styles.label}>
                            Message
                            <textarea
                                value={message}
                                name='message'
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tyope your message here..."
                                className={styles.input}
                            ></textarea>
                        </label>
                        <span>
                            <button type="submit" className={styles.submitButton}>
                                Submit
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;