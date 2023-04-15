import { useEffect, useState } from "react";
import { trpc } from "../../../utils/trpc";

const AddShoeModalContainer: React.FC = () => {
    const [shoeName, setShoeName] = useState<string>('');
    const [previousMiles, setPreviousMiles] = useState<number>();

    const createShoe = trpc.shoes.createShoe.useMutation();
    const getmessage = trpc.shoes.getMessage.useQuery();
    const shoes = trpc.shoes.getAllShoes.useQuery();

    const handleSaveShoe = () => {
        createShoe.mutate({
            name: shoeName,
            miles: previousMiles || 0
        })
    };

    // useEffect(() => {
    //     console.log(shoes.data)
    // }, [shoes])

    return (
        <>
            <div className="container flex flex-col">
                <input type="text" placeholder="Shoe name" value={shoeName} onChange={(e) => setShoeName(e.target.value)} />
                <input type="number" placeholder="Previous miles" value={previousMiles} onChange={(e) => setPreviousMiles(Number(e.target.value))}/>
                <button onClick={handleSaveShoe}>Save shoe</button>
                <div>{getmessage.data ? getmessage.data : 'loading'}</div>
                {shoes.data?.map((shoe) => (
                    <div>{shoe.name}</div>
                ))}
            </div>
        </>
    )
};

export default AddShoeModalContainer;
