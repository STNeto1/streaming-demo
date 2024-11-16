import { createAsync } from "@solidjs/router";
import { Suspense } from "solid-js";
import { fastData } from "~/lib/loaders";

export function Component2() {
	const data = createAsync(() => fastData());

	return (
		<Suspense fallback={<div>Loading 2...</div>}>
			<div>{`Component 2: ${data()?.name}`}</div>
		</Suspense>
	);
}
