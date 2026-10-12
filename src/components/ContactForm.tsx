'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    budget: '',
    brief: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brief) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <form id="contactForm" noValidate onSubmit={handleSubmit}>
      {!submitted ? (
        <div className="form-fields">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                Name <span style={{ color: 'var(--accent-blue)' }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="First and last name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company / Project</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Leave blank if personal project"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span style={{ color: 'var(--accent-blue)' }}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="We respond within 24 hours"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">What do you need built?</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a service area
              </option>
              <option value="Exchange / DEX / CEX">Exchange / DEX / CEX</option>
              <option value="DeFi Protocol">DeFi Protocol</option>
              <option value="Token Issuance / ICO / STO">Token Issuance / ICO / STO</option>
              <option value="NFT Marketplace / Metaverse">NFT Marketplace / Metaverse</option>
              <option value="Blockchain Engineering / Smart Contracts">Blockchain Engineering / Smart Contracts</option>
              <option value="Strategy & Compliance / Consulting">Strategy &amp; Compliance / Consulting</option>
              <option value="Crypto Wallet">Crypto Wallet</option>
              <option value="Crypto Marketing">Crypto Marketing</option>
              <option value="AI & Emerging Technologies">AI &amp; Emerging Technologies</option>
              <option value="Not sure — guide me">Not sure — guide me</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Approximate Budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="" disabled>
                Helps us match you to the right team
              </option>
              <option value="Under $25,000">Under $25,000</option>
              <option value="$25,000 – $100,000">$25,000 – $100,000</option>
              <option value="$100,000 – $500,000">$100,000 – $500,000</option>
              <option value="$500,000 – $2,000,000">$500,000 – $2,000,000</option>
              <option value="$2M+">$2M+</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="brief">
              Tell us about your project <span style={{ color: 'var(--accent-blue)' }}>*</span>
            </label>
            <textarea
              id="brief"
              name="brief"
              placeholder="What are you building, what stage are you at, and what do you need?"
              required
              rows={4}
              value={formData.brief}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Send Project Brief →
          </button>

          <p className="form-note">
            <i className="fa-regular fa-clock" style={{ marginRight: '6px' }}></i>
            We respond within 24 hours during business days. All enquiries are treated in strict confidence.
          </p>
        </div>
      ) : (
        <div className="form-success" style={{ display: 'block' }}>
          <i className="fa-solid fa-circle-check"></i>
          <h3>Got it. We&apos;ll be in touch.</h3>
          <p>
            Your project brief has been received. A member of our team will review it and connect you with the right specialist — typically within 24 hours during business days.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ marginTop: '16px' }}
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                service: '',
                budget: '',
                brief: '',
              });
            }}
          >
            Submit Another Inquiry
          </button>
        </div>
      )}
    </form>
  );
}
