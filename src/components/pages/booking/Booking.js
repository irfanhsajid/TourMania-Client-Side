import React from 'react';
import { useForm } from 'react-hook-form';
import "./Booking.css";


const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://damp-cove-38892.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data);
        alert('Your Order is Successfully Done');
        reset();
    };

    return (
        <div className="container">
            <h2 className="mt-5 text-center fw-bold text-dark">Fill the Form to Confirm <br />Your package </h2>
            <div className="form-container m-auto my-4">
                <div className=" border border-1 shadow-lg rounded-3 submit-form p-4 d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name")}
                            placeholder="Your Full Name"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("email")}
                            required type='email'
                            placeholder="Your Email"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("password")}

                            required type='password'
                            placeholder="Your Password"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("cost")}
                            type="number"
                            placeholder="Total Budget"
                            className="p-2 m-2 w-100"
                        /> <br />
                        <input
                            {...register("date")}
                            type="date"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <select {...register("place", { required: true })} className="p-2 m-2 w-100">
                            <option value="Sylhet">Sylhet</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Italy">Italy</option>
                            <option value="America">America</option>
                            <option value="Japan">Japan</option>
                            <option selected value="Tokyo">Tokyo</option>
                            <option value="Kashmir">Kashmir</option>
                        </select>
                        <br />
                        {errors.exampleRequisylhet && <span>This field is requisylhet</span>}
                        <input type="submit" value="Confirm" className=" d-flex m-auto btn btn-dark w-auto text-center px-3 py-2 m-2 confirm-btn" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Booking;