import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Fade, Zoom } from 'react-awesome-reveal';

const AddCampaign = () => {
    const { user, setUser, dark } = useContext(AuthContext);
    const handleAddCampaign = e => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;
        const newCampaign = { thumbnail, title, type, description, amount, deadline, email, name }

        // send data to db
        fetch('https://b10-a10-hope-nest-server.vercel.app/campaigns', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully added campaign!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    form.reset();
                }
            })
    }
    useEffect(() => {
        document.title = 'AddCampaign | HopeNest';
    }, [])
    return (

            <div className='w-[95%] sm:max-w-2xl mx-auto pt-5 pb-8 md:pb-10 lg:pb-16'>
                <div className="py-8 px-3  md:px-10 bg-gradient-to-tr from-[#fdb54244] to-[#f8b64bcc] dark:bg-gradient-to-tr dark:from-[#f1d29f] dark:to-[#f8c46f] mb-8 md:mb-13  rounded-[5px]">
                    <div className="flex justify-center items-center mb-3 md:mb-8">
                        <Zoom triggerOnce duration={2000}>
                            <div className="text-center">
                                <h1 className="font-sans font-semibold text-[#374151] text-3xl md:text-4xl mb-2 md:mb-4">Start Your Campaign</h1>
                                <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] w-full md:w-[90%] mx-auto">Create a meaningful campaign to gather support for your cause. Fill in the details below and submit to inspire others to contribute. Let's make an impact together!</p>
                            </div>
                        </Zoom>
                    </div>
                    {/* form start */}
                    <form onSubmit={handleAddCampaign}>
                        {/* 1st row */}
                        <div className="md:flex gap-3 font-sans md:mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-base text-[#1B1A1ACC] font-semibold">Thumbnail</span>
                                </label>
                                <input type="text" placeholder="Enter campaign image url" name="thumbnail" className="input w-full rounded-[5px] placeholder:text-sm" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-base text-[#1B1A1ACC] font-semibold">Campaign Title</span>
                                </label>
                                <input type="text" placeholder="Enter Campaign Title" name="title" className="input w-full rounded-[5px] placeholder:text-sm" required />
                            </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex gap-3 font-sans md:mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-base text-[#1B1A1ACC] font-semibold">Campaign Type</span>
                                </label>
                                <select
                                    name='type'
                                    required
                                    className="input w-full rounded-[5px]"
                                >
                                    <option>Personal issue</option>
                                    <option> Startup</option>
                                    <option>Business</option>
                                    <option> Creative ideas</option>
                                </select>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-base  text-[#1B1A1ACC] font-semibold">Description</span>
                                </label>
                                <textarea type="text" placeholder="Enter Campaign Description" name="description" className="input w-full rounded-[5px] pt-3 placeholder:text-sm" required />
                            </div>
                        </div>
                        {/* 3rd row */}
                        <div className="md:flex gap-3 font-sans md:mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-base  text-[#1B1A1ACC] font-semibold">Minimum Donation Amount</span>
                                </label>
                                <input type="number" placeholder="Enter amount" name="amount" className="input w-full rounded-[5px] placeholder:text-sm" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-base  text-[#1B1A1ACC] font-semibold">Deadline</span>
                                </label>
                                <input type="date" name="deadline" className="input w-full rounded-[5px] placeholder:text-sm" required />
                            </div>
                        </div>
                        {/* 4th row */}
                        <div className="md:flex gap-3 font-sans mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-base text-[#1B1A1ACC] font-semibold">User Email</span>
                                </label>
                                <input readOnly onChange={(e) => setUser(e.target.value)} type="email" name="email" value={user?.email} className="input w-full rounded-[5px] placeholder:text-sm" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-base text-[#1B1A1ACC] font-semibold">User Name</span>
                                </label>
                                <input readOnly onChange={(e) => setUser(e.target.value)} type="text" name="name" value={user?.displayName} className="input w-full rounded-[5px] placeholder:text-sm" required />
                            </div>
                        </div>
                        {/* 5th row */}
                        <Fade triggerOnce duration={2000}>
                            <div className="font-sans">
                                <button type="submit" className="font-sans btn bg-[#FCAA29] w-full rounded-[5px] text-[#331A15] text-base border-none hover:bg-[#ec9508]">Add Campaign</button>
                            </div>
                        </Fade>
                    </form>
                </div>
                <Link to='/' className='btn mb-12 md:mb-24 shadow-none mx-auto w-fit font-sans bg-transparent border-none  flex md:hidden gap-2 items-center'><span className='text-[#374151] dark:text-white text-lg md:text-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] underline'>Back to home</span>
                </Link>
            </div>
    );
};

export default AddCampaign;