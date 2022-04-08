export function FileElectron() {
    document.addEventListener('drop', e => {
        e.preventDefault()
        e.stopPropagation()

        for (const f of e.dataTransfer.files) {
            console.log('File(s) you dragged here: ', f.path)
        }
    })
    document.addEventListener('dragover', e => {
        e.preventDefault()
        e.stopPropagation()
    })
    
    return (
        <>
            <div>FileElectron</div>
            <div id="holder">Drag your file here</div>
        </>
    )
}
