import styles from "./search.module.css"

import Input from "../input/input"

export default function Search ({onChange}) {

    function onChangeValue (value) {
        onChange(value);
    }

    return(
        <>
            <div className="d-flex justify-content-center">
                <div className={`w-50 ${styles['inputBox']}`}>   
                    <Input type="text" className={`rounded-pill border-0 mt-4 ${styles['busca']}`} placeholder="Search" onChange={onChangeValue}/>
                    <i className={`fa fa-search ${styles['i1']}`} ></i>                    
                </div>
            </div>

        </>
    )
}