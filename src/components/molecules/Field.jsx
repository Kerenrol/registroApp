import Input from '../atoms/Input'
import Label from "../atoms/Label";

function Field({type,placeholder,text,value,onChange}){
    return(
        <div style={{width: "80%"}}>
            <div>
                <Label text={text}/>
            </div>
            <div>
                <Input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
            </div>
        </div>
    );
}

export default Field;