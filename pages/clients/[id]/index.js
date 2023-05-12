import { useRouter } from "next/router";
function ProjectList() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    
    return (
        <div>
            <h1>The ProjectList Given by the clients</h1>
        </div>
    );
}
export default ProjectList;