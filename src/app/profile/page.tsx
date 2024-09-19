import Container from "@/components/Container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }
  return <Container className="py-10">Perfil</Container>;
};

export default ProfilePage;
