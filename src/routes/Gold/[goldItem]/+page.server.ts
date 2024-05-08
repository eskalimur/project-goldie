import { updateGoldItem } from '$lib/services/goldService.js';
import { redirect, type Actions } from '@sveltejs/kit';

export async function load(event) {
	let { goldItem } = event.params;

	return { goldItem };
}

export const actions: Actions = {
	updateItem: async ({ request }) => {
		const itemData = await request.formData();
		const originalName = itemData.get('original_name') as string;
		const itemName = itemData.get('name') as string;
		const itemWeight = itemData.get('weight') as string;
		if (!itemName || !itemWeight) return;
		updateGoldItem(originalName, itemName, itemWeight);

		redirect(307, '/Gold');
	}
};
