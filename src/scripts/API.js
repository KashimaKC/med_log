
//using this async format now to avoid .then chains. luckily it seems like it 
//is returning correctly... for now

const getListData = async () => {
    const resp = await fetch('http:192.168.1.31/?REQUEST');
    const json = await resp.json();
    return json;
}

function setListData() {

}

export default { 
    getListData: getListData,
    setListData: setListData 
}