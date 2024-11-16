import { Title } from "@solidjs/meta";
import { Component1 } from "~/components/Component1";
import { Component2 } from "~/components/Component2";

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<p>This is a streaming demo</p>

			<Component1 />
		</main>
	);
}
