export default function User({item, choseUser}) {

    return (<div>{item.id} {item.name}
        <button onClick={() => {choseUser(item)}}>details</button>
    </div>)


}