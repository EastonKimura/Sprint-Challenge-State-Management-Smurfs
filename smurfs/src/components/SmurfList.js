import React from "react";

const SmurfList = ({ smurfs }) => {
    return (
        <div>
            {smurfs.map(smurfs => {
                return (
                    <div key={smurfs.id}>
                        <p>{smurfs.name}</p>
                        <p>{smurfs.age}</p>
                        <p>{smurfs.height}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}
export default SmurfList; 