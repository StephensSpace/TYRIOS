export interface ProConList {
    id: string
    cons: { titleEN: string, textEN: string }
    pros: { titleEN: string, textEN: string }
}

export const proConList: ProConList[] = [
    {
        id: 'procon1',
        cons: {
            titleEN: 'Talking about features instead of benefits',
            textEN: `Customers don't care what you do, they care what you can do for them`
        },
        pros: {
            titleEN: 'Clearer Messaging',
            textEN: 'Help visitors understand your value in seconds'
        }
    },
    {
        id: 'procon2',
        cons: {
            titleEN: 'Making your company the hero',
            textEN: `Your customer should be the hero, you're the guide who helps them succeed`
        },
        pros: {
            titleEN: 'Better Conversions',
            textEN: 'Turn more visitors into customers with compelling calls to action'
        }
    },
    {
        id: 'procon3',
        cons: {
            titleEN: 'Weak or confusing calls to action',
            textEN: 'Visitors need crystal clear next steps, not vague "learn more" buttons'
        },
        pros: {
            titleEN: 'Stronger Connection',
            textEN: 'Build trust by positioning yourself as the guide they need'
        }
    }
]

export default proConList;