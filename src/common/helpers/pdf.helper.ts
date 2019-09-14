import Axios from "axios";

export function downloadPdf(cb?: (buffer: any) => any) {
    const url = 'http://localhost:3000/api/user-report';
    const filename = `ficha_comercial`;
    return Axios
        .get(url, { method: 'get', responseType: 'blob' })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${filename}.pdf`);
            link.click();
            window.URL.revokeObjectURL(url);
        });
}
