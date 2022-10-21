import API_SECRET from '../scripts/secret/keys'

//using this async format now to avoid .then chains. luckily it seems like it 
//is returning correctly... for now

const getListData = async () => {
    const resp = await fetch('http:192.168.1.31/?REQUEST');
    const json = await resp.json();
    return json;
}

function postData(dateData, noteData, painData) {

    fetch(`http://192.168.1.31/?POST/${dateData}/${painData}/${noteData}`);

    console.log(dateData, noteData, painData);
}

function removeData(key) {
    
}

export default { 
    getListData: getListData,
    postData: postData 
}