interface SearchListProps {
    showList?: boolean
}

export default function SearchList({showList = true}: SearchListProps){
    let show;
    if(showList) {
        show = 'showList'
    }
    return (
        <div className={show}>
            <p>Brittany</p>
        </div>
    )
}