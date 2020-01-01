export const fetchData = async () =>{
    try{
        const response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
        const data = await response.json();

        return data;
    } catch (e) {
        console.log(e);
    }
}

export const deleteEmployeeById = async(id) =>{
    try{
        const response = await fetch("http://dummy.restapiexample.com/api/v1/delete/" + id , {
            method: 'DELETE'
        });
        const data = await response.json();

        return data;
    } catch (e) {
        console.log(e);
    }
}