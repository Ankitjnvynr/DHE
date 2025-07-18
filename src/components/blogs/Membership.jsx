import React, { useState } from "react";
// Make sure this path is correct

const MembershipSection = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!form.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted!");
            setForm({ name: "", email: "", message: "" });
            setErrors({});
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section className="td_row_gap_30 td_plr_60 td_gray_bg td_accent_color">
            <div className="container-fluid td_row_gap_30 flex flex-col lg:flex-row items-start py-16">
                {/* Left Text Section */}
                <div className="lg:w-1/2 td_pr_35">
                    <h1 className="td_fs_52 td_bold td_heading_color mb-4">Benefits of Membership</h1>
                    <h3 className="td_fs_24 td_medium mb-4">Get access to exclusive content</h3>
                    <p className="td_fs_16 td_body_color mb-3">
                        <ul>
                            <li>Free Access to National Conferences: As a valued member, enjoy complimentary entry to our national and international conferences and events, fostering a platform for knowledge exchange.</li>
                            <li>Editorial Board Opportunity: Stand a chance to become part of the editorial board for Viksit India and other Journals contributing to impactful educational content.</li>
                            <li>Contribution to Education: Unlock opportunities to contribute significantly to the field of education. Your ideas and efforts can make a meaningful impact on the holistic development of learners.</li>
                            <li>Exclusive Workshops and Seminars: Gain access to exclusive workshops and seminars, empowering you with insights and skills to thrive in the education sector.</li>
                            <li>Networking Opportunities: Connect with a diverse community of educators, professionals, and students, creating a network that fosters collaboration and growth.</li>
                            <li>Networking Opportunities: Connect with a diverse community of educators, professionals, and students, creating a network that fosters collaboration and growth.</li>
                        </ul>
                    </p>
                    <h3 className="td_fs_24 td_medium mb-4">Membership Fee</h3>
                    <ul>
                        <li className="td_fs_16 td_body_color mb-3">Life Member: ₹ 5000
                        </li>
                        <li className="td_fs_16 td_body_color mb-3">Annual Member: ₹ 2000</li>
                    </ul>

                    <h3 className="td_fs_24 td_medium mb-4">Membership Fee for Students</h3>
                    <ul>
                        <li className="td_fs_16 td_body_color mb-3">Life Member: ₹ 2500
                        </li>
                        <li className="td_fs_16 td_body_color mb-3">Annual Member: ₹ 1000</li>
                    </ul>
                    <p className="td_fs_16 td_body_color">
                        Just fill out the form to join and receive confirmation in your inbox!
                    </p>
                </div>

                {/* Right Form Section */}
                <div className=" bg-white text-center p-5 mt-5  mb-5 shadow-md  " style={{width:"fit-content",margin:"0 auto "}}>
                    <form onSubmit={handleSubmit} className="flex">
                        <h1 className="td_fs_36 td_bold text-[#890c25] mb-4">Membership Form</h1>

                        {/* Row 1: Full Name + Email */}
                        <div className="flex flex-col md:flex-row md:gap-6 gap-0">
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="name" className="mb-2 td_medium">Full Name</label> &nbsp;&nbsp;
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-3 td_radius_5"
                                    placeholder="Enter your full name"
                                />
                                {errors.name && <span className="text-red-600 text-sm mt-1">{errors.name}</span>}
                            </div>

                            <div className="flex-1 flex flex-col"><br/>
                                <label htmlFor="email" className="mb-2 td_medium">Email</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-3 td_radius_5"
                                    placeholder="you@example.com"
                                />
                                {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email}</span>}
                            </div>
                        </div>

                        {/* Row 2: Phone + Address */}
                        <div className="flex flex-col md:flex-row md:gap-6 gap-4">
                            <div className="">
                                <label htmlFor="phone" className="mt-2 mb-2 td_medium">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={form.phone || ""}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-3 td_radius_5"
                                    placeholder="e.g. 9876543210"
                                />
                                {errors.phone && <span className="text-red-600 text-sm mt-1">{errors.phone}</span>}
                            </div>

                            <div className="flex-1 flex flex-col">
                                <label htmlFor="address" className="mb-2 td_medium">Address</label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={form.address || ""}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-3 td_radius_5"
                                    placeholder="Your address"
                                />
                                {errors.address && <span className="text-red-600 text-sm mt-1">{errors.address}</span>}
                            </div>
                        </div>

                        {/* Row 3: Membership Dropdown */}
                        <div className="flex flex-col">
                            <label htmlFor="membership" className="mb-2 td_medium">Membership Type</label>
                            <select
                                id="membership"
                                name="membership"
                                value={form.membership || ""}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 td_radius_5"
                            >
                                <option value="">Select an option</option>
                                <option value="student">Student</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.membership && <span className="text-red-600 text-sm mt-1">{errors.membership}</span>}
                        </div>

                        {/* Row 4: Message */}
                        <div className="flex flex-col">
                            <label htmlFor="message" className="mb-2 td_medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={form.message}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 td_radius_5"
                                placeholder="Write your message..."
                            ></textarea>
                            {errors.message && <span className="text-red-600 text-sm mt-1">{errors.message}</span>}
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="td_btn td_style_1 td_with_shadow td_radius_5 td_accent_bg text-white td_btn_in p-2"
                            >
                                Submit Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MembershipSection;
