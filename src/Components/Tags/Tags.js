import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.scss';

const Tags = ({setSelectedTag}) => {
 
    const [tags, setTags] = useState([]);
  

    useEffect(() => {
        const getTags =
        async () =>{
            const {data} = await axios.get("http://lucas-movie-app.azurewebsites.net/umbraco/api/moviedata/gettags");
            data.forEach(tag => {
                tag.isSelected= false;
            });
            setTags(data);
        };
        getTags();
    }, []);

    const isSelected=(tag)=>{
        return tag.isSelected ? "btn-selected" : "btn-unselected";
    }
    useEffect(() => {
        
    }, [tags])

    const onClickHanlder = e =>{
        tags.forEach(tag => {
            if(tag.Title === e.target.id){
                tag.isSelected = !tag.isSelected;
           
                if(tag.isSelected)
                    setSelectedTag(tag)
                else 
                    setSelectedTag(null);

            }
            else
                tag.isSelected = false;
        });
        
        
    }
    return <div>
        {tags.map((tag)=>
            <button 
            id={tag.Title}
            className={isSelected(tag)}
            onClick={onClickHanlder}
            >#{tag.Title}</button>
        )}
    </div>
}

export default Tags;