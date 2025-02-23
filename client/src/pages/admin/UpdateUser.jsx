import { useLoaderData } from "react-router-dom";
import { useRef, useState } from "react";
import FormUpdateUser from "../../components/FormUpdateUser";

function UpdateUser() {
  const dataUser = useLoaderData();
  const userRef = useRef();
  const [id, setId] = useState(0);
  //  États pour l'affichage de l&apos;erreur
  const [responseValue, setResponseValue] = useState("");
  const showUser = () => {
    setId(userRef.current.value);
    setResponseValue("");
  };
 
  return (
    <>
      <header>
        <h1>modifier un utilisateur :</h1>
      </header>
      <section className="alignment">
        <select ref={userRef} onChange={showUser}>
          {dataUser.map((value, index) => (
            <option key={value.id} value={index}>
              {value.firstname} {value.lastname}
            </option>
          ))}
        </select>
        <FormUpdateUser value={dataUser[id]} admin={1} responseValue={responseValue} setResponseValue={setResponseValue} />
      </section>
    </>
  );
}
export default UpdateUser;
