import React, {useState} from "react";
import './App.css';

/*
function Search(props){
    const [city, setCity] = useState();

    function searchInput(e){
        e.preventDefault();
        let currentValue = document.querySelector('input[type=text]').value;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=0929d6bf69dd2c34c6f8de2771610efa`
        
        
        fetch(url).then(Response => Response.json()).then(data=>{
            const {main, name, sys, weather} = data;
            if(sys != undefined){
                console.log(main)
            
                if(weather != undefined){
                    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;
                    setCity(`
                    <img src="${icon}"/>
                    <p>${name}</p>
                    <p>${sys.country}</p>
                    <p>${main.temp}</p>
                    `)
                }
            }else{
                setCity('');
            }    
        })

    
    }


    return(
        <div className="search">
            <form onSubmit={(e)=>searchInput(e)}>
                <input type="text" name="searchinput" placeholder={props.placeholder}/>
                <input type="submit" value="Search"/>
            </form>
            <div className="searchWraper">
                {city != ''? <div dangerouslySetInnerHTML={{__html: city}}></div>  :<p>Procure por uma cidade</p>}
            </div>
        </div>
    )
}

export default Search;*/

function Search(props){
    const [city, setCity] = useState()

    function searchInput(e){
        e.preventDefault();
        let currentValue = document.querySelector('input[type=text]').value;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=0929d6bf69dd2c34c6f8de2771610efa`;

        fetch(url).then(Response => Response.json()).then(data=> {
            const {main, name, sys, weather} = data;

            if(sys != undefined){
                if(weather != undefined){
                    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;

                    setCity(`
                        <img src="${icon}">
                        <p>${name}</p>
                        <p>${main.temp}</p>
                        <p>${sys.country}</p>
                    `)

                }else{
                    setCity('');
                }
            }
        })
    }
    
    return(
        <div className="search">
                  <h2>weather</h2>
            <form onSubmit={(e) => searchInput(e)}>
                <input type="text" placeholder={props.placeholder}/>
                <input type="submit" value="Search"/>
            </form>
            <div className="searchWraper">
                {city != '' ? <div dangerouslySetInnerHTML={{__html: city}}></div>:<p>Procure por uma cidade</p>}
            </div>
        </div>
    )
}

export default Search;