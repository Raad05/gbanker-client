import baseaxios from '../../../Axios/baseaxios';
import nodeaxios from '../../../Axios/nodeaxios';
const LoanData = ({ loan }) => {
    const { loanAmount,
        loanId,
        memberId,
        packageId, approved } = loan

    const updateApproval = () => {
        const dataBlob = {
            idempotencyKey: Date.now().toString(),
            input: {
                _loanId: loanId,
            },
            key: sessionStorage.getItem("address")
        };

        baseaxios.post("/namespaces/default/apis/LoanApprovalSystem_2.0/invoke/approveLoan",
            dataBlob
        ).then((response) => {
            if (response.status == 202) {
                try {
                    nodeaxios.post("/loan/approveLoan", {
                        loanId: loanId
                    }).then((response) => {
                        alert("Approved!");
                    }
                    );

                } catch (err) {
                    console.log(err);
                    alert("Failed to approve member");
                }

            }
        })
    }

    return (
        <tr className="Loan-data">
            <td className="bg-gray-200">{loanAmount}</td>
            <td className="bg-gray-200">{loanId}</td>
            <td className="bg-gray-200">{memberId}</td>
            <td className="bg-gray-200">{packageId}</td>

            <td>
                {approved === true ? (
                    <p className="p-2">{approved}</p>
                ) : (
                    <button
                        onClick={updateApproval}
                        className="bg-blue-400 p-2 rounded text-white"
                    >
                        Approve
                    </button>
                )}
            </td>

        </tr>
    );
};

export default LoanData;