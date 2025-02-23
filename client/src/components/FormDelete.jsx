import PropTypes from "prop-types";
import { useLocation, useRevalidator } from "react-router-dom";
import { useContext } from "react";
import { UserConnectionContext } from "../contexts/UserConnectionProvider";


function FormDelete({ item, id, setMessageRequest }) {
  const { disconnect } = useContext(UserConnectionContext);
  const location = useLocation().pathname;

  const revalidator = useRevalidator();
  const handleDelete = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const deleteFileFetch = await fetch(
      `${import.meta.env.VITE_API_URL}/api/${item}s/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Inclusion du jeton JWT
          },
      }
    );
if(deleteFileFetch.status===301){
  setMessageRequest(
  `Cet administrateur ne peut pas être supprimé.`
);} else if (deleteFileFetch.ok) {
      setMessageRequest(`L'${item} a bien été supprimé de la base de donnée.`);
      revalidator.revalidate();
if(item==='user' && location.includes("/user/")){
disconnect();
}

    } else {
      setMessageRequest(
        `Une erreur c'est produite lors de la suppression de l'${item}.`
      );
    }

    return null;
  };

  return (
    <button className="button-form" type="button" onClick={handleDelete}>
      supprimer {item}
    </button>
  );
}
FormDelete.propTypes = {
  item: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setMessageRequest: PropTypes.string.isRequired,
};

export default FormDelete;
