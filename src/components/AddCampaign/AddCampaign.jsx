import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddCampaign = () => {
    const { user, setUser } = useContext(AuthContext)
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
        console.log(newCampaign);

        // send data to db
        fetch('http://localhost:5000/campaigns', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
    return (
        <div className='w-[90%] mx-auto max-w-6xl'>
            <div className="px-4 py-10 lg:py-[70px] md:px-14 lg:px-[112px] bg-gradient-to-tr from-[#fdb54244] to-[#f8b64bcc] my-8 md:my-13  rounded-[5px]">
                <div className="flex justify-center items-center mb-5 md:mb-8">
                    <div className="text-center">
                        <h1 className="font-sans font-semibold text-[#374151] text-4xl md:text-5xl  mb-5 md:mb-8">Start Your Campaign</h1>
                        <p className="md:text-lg font-sans text-[#1B1A1AB3] w-full md:w-[90%] mx-auto">Create a meaningful campaign to gather support for your cause. Fill in the details below and submit to inspire others to contribute. Let's make an impact together!</p>
                    </div>
                </div>
                {/* form start */}
                <form onSubmit={handleAddCampaign}>
                    {/* 1st row */}
                    <div className="md:flex gap-6 font-sans mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg text-[#1B1A1ACC] font-semibold">Thumbnail</span>
                            </label>
                            <input type="text" placeholder="Enter campaign image url" name="thumbnail" className="input w-full rounded-[5px]" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg text-[#1B1A1ACC] font-semibold">Campaign Title</span>
                            </label>
                            <input type="text" placeholder="Enter Campaign Title" name="title" className="input w-full rounded-[5px]" required />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="md:flex gap-6 font-sans mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg text-[#1B1A1ACC] font-semibold">Campaign Type</span>
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
                                <span className="text-lg text-[#1B1A1ACC] font-semibold">Description</span>
                            </label>
                            <textarea type="text" placeholder="Enter Campaign Description" name="description" className="input w-full rounded-[5px] pt-3" required />
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="md:flex gap-6 font-sans mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg text-[#1B1A1ACC] font-semibold">Minimum Donation Amount</span>
                            </label>
                            <input type="number" placeholder="Enter amount" name="amount" className="input w-full rounded-[5px]" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg text-[#1B1A1ACC] font-semibold">Deadline</span>
                            </label>
                            <input type="date" name="deadline" className="input w-full rounded-[5px]" required />
                        </div>
                    </div>
                    {/* 4th row */}
                    <div className="md:flex gap-6 font-sans mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg text-[#1B1A1ACC] font-semibold">User Email</span>
                            </label>
                            <input disabled onChange={(e) => setUser(e.target.value)} type="email" name="email" value={user?.email} className="input w-full rounded-[5px]" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg text-[#1B1A1ACC] font-semibold">User Name</span>
                            </label>
                            <input disabled onChange={(e) => setUser(e.target.value)} type="text" name="name" value={user?.displayName} className="input w-full rounded-[5px]" required />
                        </div>
                    </div>
                    {/* 5th row */}
                    <div className="font-sans">
                        <button type="submit" className="font-sans btn bg-[#FCAA29] w-full rounded-[5px] text-[#331A15] text-xl border-none">Add Campaign</button>
                    </div>
                </form>
            </div>
            <Link to='/' className='btn mb-12 md:mb-24 shadow-none mx-auto w-fit font-libre bg-transparent border-none  flex gap-2 items-center'><span className='text-[#374151] text-2xl md:text-3xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] underline'>Back to home</span>
            </Link>
        </div>
    );
};

export default AddCampaign;