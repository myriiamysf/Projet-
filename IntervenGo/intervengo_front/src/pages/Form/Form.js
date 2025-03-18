import React, { useState, useRef, useEffect } from 'react';
import './FormStyles.css'
import Navbar from '../../components/Navbar';
import SignatureCanvas from 'react-signature-canvas'
import { getAllInterventionIntervenant } from '../../services/InterventionIntervenant/InterventionIntervenantService';
import { updateIntervention } from '../../services/Intervention/InterventionService';
import { generatePdf } from '../../services/pdf/pdfService';


const Form = () => {

    const [action, setAction] = useState('');
    const [image, setImage] = useState('');
    const [image64, setImage64] = useState('');
    const [signature, setSignature] = useState();
    const [url, setUrl] = useState();
    const [allInterventionIntervenant, setAllInterventionIntervenant] = useState([])

    useEffect(() => {
        getAllInterventionIntervenant().then((response) => {
            setAllInterventionIntervenant(response);
        })
    }, [])

    const convertToBase64 = () => {
        const reader = new FileReader()

        reader.readAsDataURL(image)
        reader.onload = () => {
            console.log('called: ', reader)
            setImage64(reader.result)
        }
    }
    const handleSubmit = async(data) => {
        data.preventDefault();
        try {
            const res = signature.toDataURL('image/png');
            setUrl(res)
            const intervention_id = document.getElementById("intervention").value.split(',')
            const status = "Fini"
            convertToBase64()
            updateIntervention(intervention_id[0], image64, url, action, status);
            generatePdf(intervention_id[0]);
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleClear = () => {
        signature.clear();
        setUrl(null);
    }

    const handleGenerate = () => {
        const res = signature.toDataURL('image/png');
        setUrl(res);
    }

    function handleUploadImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0])
    }


    return (
        <div>
            <div>
                <Navbar title={'Form'}/>
            </div>

            <div className='formulaire'>
                <form className='formulaire-base'>
                    <div className='object'>
                        <label htmlFor='intervention'>Intervention</label>
                        <select id='intervention' className='object-input' required>
                            {allInterventionIntervenant?.map((item, key) => 
                            <option key={key} value={[item.intervention.id, item.id]}>{item.intervention.id}</option>
                            )}
                        </select>
                    </div>
                    <div className='object'>
                        <label htmlFor="action">Action</label>
                        <textarea
                            className='object-area'
                            type='text' 
                            name='action' 
                            id='action'
                            placeholder='Action réalisé'
                            value={action}
                            onChange={(e) => setAction(e.target.value)} 
                            required minLength={3}>
                        </textarea>
                    </div>
                    <div className='object'>
                        <label htmlFor="image" >Image</label>
                        <input 
                            className='object-input'
                            type='file' 
                            id='image' 
                            name='file'
                            onChange={handleUploadImage}
                        />
                    </div>
                    <div className='canva'>
                        <SignatureCanvas
                            canvasProps={{width: 500, height:200, className: 'signCanvas'}}
                            ref={(ref) => setSignature(ref)}
                        />
                    </div>
                    <div onClick={handleClear}>Clear</div>
                    <div onClick={handleGenerate}>Save</div >
                    <button className='bouton' type='submit' onClick={handleSubmit}>Submit</button>
                </form>
                {
                    url && (
                        <div>
                            <img src={url}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default Form;