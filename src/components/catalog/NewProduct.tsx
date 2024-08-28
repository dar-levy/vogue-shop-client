// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Joi from "joi-browser";
import "./ProfileForm.css";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../common/Form.tsx";

class NewProduct extends Form {
    state = {
        data: {
            name: "",
            description: "",
            price: "",
            brand: "",
            type: "",
            pictureUrl: "",
        },
        errors: {},
    };

    schema = {
        _id: Joi.string(),
        name: Joi.string().required().label("Name"),
        description: Joi.string().required().label("Description"),
        price: Joi.integer().required().label("Price"),
        brand: Joi.string().required().label("Brand"),
        type: Joi.string().required().label("Type"),
        pictureUrl: Joi.string().required().uri().label("Image URL"),
    };

    doSubmit = async () => {
        try {
            await saveProduct(this.state.data);
            this.props.navigate("/catalog");
            toast.success("Saved successfully.");
        } catch (err) {
            toast.error("Could not save the product");
        }
    };

    render() {
        const { pictureUrl } = this.state.data;

        return (
            <div className="profile-form-container">
                <h1>Product Form</h1>
                {pictureUrl && (
                    <div className="avatar-container">
                        <img src={pictureUrl} alt="Picture URL" className="avatar" />
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("description", "Description")}
                    {this.renderInput("price", "Price")}
                    {this.renderInput("brand", "Brand")}
                    {this.renderInput("type", "Type")}
                    {this.renderInput("pictureUrl", "Picture URL")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default function ProfileFormWrapper(props) {
    const params = useParams();
    const navigate = useNavigate();
    return <ProfileForm {...props} params={params} navigate={navigate} />;
}
