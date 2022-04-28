import React,{useState,useEffect} from 'react'
import './CreateShop.css'
import CityIcon from "@material-ui/icons/LocationCity";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import ContactIcon from "@material-ui/icons/ContactPhone"
import StateIcon from "@material-ui/icons/AddLocation"
import { Button } from "@material-ui/core";
import { createShop,clearErrors } from '../../actions/shopAction';
import { useAlert } from 'react-alert';
import { useDispatch,useSelector } from 'react-redux';
import { NEW_SHOP_RESET } from '../../constant/shopConstant';


const CreateShop = ({history}) => {

  const alert =useAlert();
  const dispatch=useDispatch();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { loading, error, success } = useSelector((state) => state.newShop);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Shop Created Successfully");
      history.push("/seller/dashboard");
      dispatch({ type: NEW_SHOP_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createShopSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("contact", contact);
    myForm.set("city", city);
    myForm.set("state", state);
    myForm.set("country", country);
    myForm.set("pinCode", pinCode);
    

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createShop(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className='newShopContainer'>
       <form
         className="createShopForm"
        encType="multipart/form-data"
        onSubmit={createShopSubmitHandler}
       >
       <h1>Create Shop</h1>

    <div>
      <SpellcheckIcon />
      <input
       type="text"
        placeholder="Shop Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <ContactIcon />
      <input
       type="number"
        placeholder="Mobile no."
        required
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
    </div>
    <div>
      <CityIcon />
      <input
        type="string"
        placeholder="city"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>

    <div>
      <StateIcon />
      <input
        type="string"
        placeholder="state"
        required
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>

    <div>
    <StateIcon />
      <input
        type="string"
        placeholder="country"
        required
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    </div>

    <div>
    <StateIcon />
      <input
        type="number"
        placeholder="pincode"
        required
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
      />
    </div>

    <div id="createShopFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
    </div>
    <div id="createShopFormImage">
         {imagesPreview.map((image, index) => (
          <img key={index} src={image} alt="Shop Preview" />
          ))}
     </div>


    <Button
      id="createShopBtn"
      type="submit"
      disabled={loading ? true : false}
    >
      Create shop
    </Button>
  </form>
  </div>
  )
}

export default CreateShop