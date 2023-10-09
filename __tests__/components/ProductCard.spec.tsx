import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ProductCard } from '@/components/ProductCard';


describe('Product Card', () => {
    it('should show correct info', () => {
        const title = "Some nice title"
        const description = "This is a description for the product card test"
        const imgUrl = "https://host.com/image"
        const component = render(<ProductCard
            id={1}
            title={title}
            shortDescription={description}
            imgUrl={imgUrl}
            />)
        const titleTag = component.queryByText(title)
        expect(titleTag).toBeInTheDocument()
        expect(titleTag?.tagName?.toLocaleLowerCase()).toBe('h5')
    })
    
})