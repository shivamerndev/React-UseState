const CardStats = ({ time, timer, toggle }) => {

    let lst = JSON.parse(localStorage.getItem("tasks")) || []

    const data = [{ value: lst.length, title: 'Total Tasks' }, { value: lst.length, title: 'Active' }, { value: 0, title: 'Completed' }, { value: time(timer), title: 'Total Time' }, { value: ((timer / (lst.length || 1)).toFixed(1)+"s"), title: 'Avg/Task' }, { value: 0, title: 'Completion' }]

    return <div className='grid grid-cols-3 gap-4 my-8'>

        {data.map(o => <div key={o.title} id={toggle? "bg-theme-light":'bg-theme'} className=" rounded-md md:rounded-2xl shadow-lg px-6 py-4 md:p-6 text-center hover:shadow-xl transition-all">
            <p className="text-3xl font-bold">{o.value}</p>
            <h3 className=" text-sm font-medium mt-4">{o.title}</h3>
        </div>
        )}

    </div>
}

export default CardStats