import { createAsync } from "@solidjs/router";
import { Suspense } from "solid-js";
import { slowData } from "~/lib/loaders";

export function Component3() {
	const data = createAsync(() => slowData());

	return (
		<Suspense fallback={<div>Loading 3...</div>}>
			<div>{`Component 3: ${data()?.name}`}</div>
		</Suspense>
	);
}
