import Name from "./Name";

function DogCard(props){
   
    return(
        //single element wrap krke send krne ka
        <div>
           
            <h3>Hello</h3>
            <h2>Moti</h2>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Street_dog_in_pune01.jpg/330px-Street_dog_in_pune01.jpg" alt="" />
            <h3>DogImg</h3>
            <DogImg/>
            <Name>
                <h3>{props.location}</h3>
            </Name>

        </div>
    );
}
function DogImg(){
    return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Street_dog_in_pune01.jpg/330px-Street_dog_in_pune01.jpg" alt="" />
    
}
export default DogCard;  //sirf ek function ko export krega
/*
 return(
        //aise nhi chalega
        <div>
            <h2>Moti</h2>
            <img src="https://th.bing.com/th/id/R.f961fdc43ea6c6d3b686666fec25e69d?rik=bpVfWuX%2bqbv9zg&riu=http%3a%2f%2fgora-gora-gora.com%2fwp-content%2fuploads%2f2010%2f09%2fIMG_4603a.jpg&ehk=cSH5n9arkaQXwA4FTvf46PcEdNOQidfIE8jMvXmq7ic%3d&risl=&pid=ImgRaw&r=0" alt="" />

        </div>
        <div>

        </div>

    );
*//*
 return(
        //aise chalega :return hum ek parent element me krte hai hamesha
        <div>
            <div>
            <h2>Moti</h2>
            <img src="https://th.bing.com/th/id/R.f961fdc43ea6c6d3b686666fec25e69d?rik=bpVfWuX%2bqbv9zg&riu=http%3a%2f%2fgora-gora-gora.com%2fwp-content%2fuploads%2f2010%2f09%2fIMG_4603a.jpg&ehk=cSH5n9arkaQXwA4FTvf46PcEdNOQidfIE8jMvXmq7ic%3d&risl=&pid=ImgRaw&r=0" alt="" />

            </div>
         <div>
                hello
         </div>
        <div>

    );
*/

