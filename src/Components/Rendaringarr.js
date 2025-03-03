// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
// ];


const people2 = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];

const list2 = people2.filter(info => info.id > 0)
// console.log(list2);


// const list = people.map(person => { return <li>{person}</li>})

function Rendaringarr() {
    const list3 = list2.map((person) => {
        console.log("person name", person.name);
        return (
            <li key={person.id}>
                <h5>Name : {person.name}</h5>
                <p>profession :{person.profession}</p>
            </li>
        )
    })
    return (
        <div className="info">
            <ul>{list3}</ul>
        </div>
    )
}

export default Rendaringarr;