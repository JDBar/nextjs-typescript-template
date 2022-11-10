import styles from "@/styles/Page.module.scss";
import {getUserData} from "@/pages/api/user";

export default async function Page() {
	const userData = await getUserData();
	return <h1 className={styles.exampleClass}>Hello, {userData.name}</h1>;
}
