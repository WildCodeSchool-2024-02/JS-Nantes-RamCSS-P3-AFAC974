import { useLoaderData } from "react-router-dom";
import { useRef, useState } from "react";
import FormUpdateUser from "../../components/FormUpdateUser";

function UpdateUser() {
  const dataUser = useLoaderData();
  const artistRef = useRef();
  const [id, setId] = useState(0);

  const showUser = () => {
    setId(artistRef.current.value);
  };

  return (
    <>
      <header>
        <h1>modifier un utilisateur :</h1>
      </header>
      <section className="alignment">
        <select ref={artistRef} onChange={showUser}>
          {dataUser.map((value, index) => (
            <option key={value.id} value={index}>
              {value.firstname} {value.lastname}
            </option>
          ))}
        </select>
        <FormUpdateUser value={dataUser[id]} admin={1} />
      </section>
    </>
  );
}
export default UpdateUser;
