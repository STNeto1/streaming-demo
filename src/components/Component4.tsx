import { createAsync } from "@solidjs/router";
import { Suspense } from "solid-js";
import { reallySlowData } from "~/lib/loaders";

export function Component4() {
	const data = createAsync(() => reallySlowData());

	return (
		<Suspense fallback={<div>Loading 4...</div>}>
			<div>{`Component 4: ${data()?.name}`}</div>
		</Suspense>
	);
}
