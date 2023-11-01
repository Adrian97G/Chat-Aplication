import { defineStore } from 'pinia'

export const useContacts = defineStore('contacts', {
	actions: {
		setLastMessage(payload, id) {
			this.contacts.forEach(contact => {
				if (contact.id == id) contact.lastMessage = payload
			})
		},
		setCurrentKeyword(payload) {
			this.currentKeyword = payload
		}
	},
	state: () => {
		return {
			currentKeyword: '',
			contacts: [
				{
						id: 1,
						avatar: '/profile.jpg',
						name: 'Adrian Ospina',
						initial: 'AO',
						lastMessage: 'Sure we are going to plazamart now',
						unReadMessage: 0,
						timestamp: '14:23',
						status: 'online'
					},
					{
						id: 2,
						avatar: 'company.png',
						name: 'Company',
						initial: 'C',
						lastMessage: 'Hi Ahmed! How\'s are you?',
						unReadMessage: 1,
						timestamp: '14:22',
						status: 'online'
					},
					{
						id: 3,
						avatar: null,
						name: 'Shabrina A',
						initial: 'SA',
						lastMessage: 'I am contacting you because am very hungry',
						unReadMessage: 1,
						timestamp: '10:00',
						status: 'offline'
					},
					{
						id: 4,
						avatar: null,
						name: 'Ed Sharon',
						initial: 'ES',
						lastMessage: 'Hi bruuh :>',
						unReadMessage: 1,
						timestamp: '11:00',
						status: 'offline'
					},
					{
						id: 5,
						avatar: '/profile.jpg',
						name: 'Adrian Dev',
						initial: 'AD',
						lastMessage: 'hello friend 😀',
						unReadMessage: 0,
						timestamp: '12:00',
						status: 'online'
					},
					{
						id: 6,
						avatar: null,
						name: 'Fredy Hernan',
						initial: 'FH',
						lastMessage: '😂😂😂😂',
						unReadMessage: 1,
						timestamp: '21:00',
						status: 'offline'
					},
					{
						id: 7,
						avatar: null,
						name: 'James Smith',
						initial: 'JS',
						lastMessage: 'Aowkaoawkoakwokawl',
						unReadMessage: 1,
						timestamp: '11:00',
						status: 'offline'
					}
			]
		}
	}
})
