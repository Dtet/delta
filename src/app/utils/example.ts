import { SelectComponent } from "@shared/components/select/select.component";

export interface Example {
    component: any;
    title: string;
}
export const EXAMPLE_COMPONENTS: { [key: string]: Example } = {
    'data-source-backend-example': {
        component: SelectComponent,
        title: 'Backend data with async pipe'
    }
} 