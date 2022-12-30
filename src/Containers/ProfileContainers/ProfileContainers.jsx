import ProfileCard from "../../components/ProfileCard/ProfileCard";

const ProfileContainers = ({ profiles }) => {
  const profileCardJSX = profiles.map((element) => {
    return (
      <ProfileCard
        name={element.name.first}
        email={element.email}
        phoneNumber={element.phone}
        image={element.picture.large}
      />
    );
  });
  return <div className="profile-container">{profileCardJSX}</div>;
};
export default ProfileContainers;
