import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid gird-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            name={pet.name}
            id={pet.id}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
