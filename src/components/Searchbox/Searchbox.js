const Searchbox = ({searchChange}) => {
    return(
        <div className="tc searchbox">
            <input type="search" name="" onChange={searchChange} placeholder="Searching robot..." className="form-control" />  
        </div>
    )
}

export default Searchbox;