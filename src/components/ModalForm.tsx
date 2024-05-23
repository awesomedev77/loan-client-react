import React, { useState } from 'react';
import { isNotEmpty, isValidEmail } from '../utils/validators';
import Input from './Input';
import logo from '../assets/images/logo.png'

type ModalFormProps = {
  show: boolean;
  onClose: () => void;
};

const ModalForm: React.FC<ModalFormProps> = ({ show, onClose }) => {

  const [errors, setErrors] = useState({ companyName: '', applicantName: '', applicantEmail: '' });
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyTaxNumber, setCompanyTaxNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [loanType, setLoanType] = useState('default');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');

  const validateForm = () => {
    let valid = true;
    let errors = { companyName: '', applicantName: '', applicantEmail: '' };


    if (!isValidEmail(applicantEmail)) {
      errors.applicantEmail = 'Invalid email format';
      valid = false;
    }
    if (!companyName) {
      errors.companyName = 'Company Name is required';
      valid = false;
    }
    if (!applicantName) {
      errors.applicantName = 'Applicant Name is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    onClose();
  };


  if (!show) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full mt-0 flex items-center justify-center">
      <div className='fixed left-0 top-0 w-screen h-screen bg-transparent' onClick={onClose}>
      </div>
      <div className="relative my-auto mx-auto p-5 border w-[520px] shadow-lg rounded-[14px] bg-white">
        <div className="mb-5 flex justify-evenly items-center">
          <div className="">
            <img
              alt=""
              className="h-14 w-14"
              src={logo} />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create Loan Application
          </h2>
        </div>
        <form className="px-8 py-2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              value={companyName}
              label='Company Name'
              handleChange={(e) => {
                setCompanyName(e.target.value);
                if (!isNotEmpty(e.target.value)) {
                  setErrors({ ...errors, companyName: 'Company Name is required' })
                } else {
                  setErrors({ ...errors, companyName: '' })
                }
              }}
            />
            {errors.companyName && <p className="text-red-500 ms-[43%] text-xs">{errors.companyName}</p>}
          </div>
          <div className="mb-4">
            <Input
              type="text"
              value={companyLocation}
              label='Company Location'
              handleChange={(e) => {
                setCompanyLocation(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              value={companyTaxNumber}
              label='Company Tax Number'
              handleChange={(e) => {
                setCompanyTaxNumber(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <Input
              type="number"
              value={loanAmount}
              label='Loan Amount'
              handleChange={(e) => {
                setLoanAmount(Number(e.target.value));
              }}
            />
          </div>
          <div className="mb-4 flex items-center">
            <div className='w-4/5'>Currency :</div>
            <select
              className='rounded-md  w-full border sm:text-sm px-2 py-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2.5'
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
              name="currency"
              id=""
            >
              <option selected={currency == "USD"} value="USD">USD</option>
              <option selected={currency == "EUR"} value="EUR">EUR</option>
              <option selected={currency == "AUD"} value="AUD">AUD</option>
              <option selected={currency == "CAD"} value="CAD">CAD</option>
              <option selected={currency == "AED"} value="AED">AED</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <div className='w-4/5'>Loan Type :</div>
            <select
              className='rounded-md  w-full border sm:text-sm px-2 py-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2.5'
              value={loanType}
              onChange={(e) => {
                setLoanType(e.target.value);
              }}
              name="currency"
              id=""
            >
              <option selected={loanType == "default"} value="default">default</option>
              <option selected={loanType == "type1"} value="type1">type1</option>
              <option selected={loanType == "type2"} value="type2">type2</option>
            </select>
          </div>
          <div className="mb-4">
            <Input
              type="number"
              value={currency}
              label='Loan Amount'
              handleChange={(e) => {
                setCurrency(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              value={applicantName}
              label='Applicant Name'
              handleChange={(e) => {
                setApplicantName(e.target.value);
                if (!isNotEmpty(e.target.value)) {
                  setErrors({ ...errors, applicantName: 'Applicant Name is required' });
                } else {
                  setErrors({ ...errors, applicantName: '' });
                }
              }}
            />
            {errors.applicantName && <p className="text-red-500 ms-[43%] text-xs">{errors.applicantName}</p>}
          </div>
          <div className="mb-4">
            <Input
              type="text"
              value={applicantEmail}
              error={!!errors.applicantEmail}
              label='Applicant Email'
              handleChange={(e) => {
                setApplicantEmail(e.target.value);
                if (!isNotEmpty(e.target.value)) {
                  setErrors({ ...errors, applicantEmail: 'Email is required' })
                } else if (!isValidEmail(e.target.value)) {
                  setErrors({ ...errors, applicantEmail: 'Invalid email format' })
                } else {
                  setErrors({ ...errors, applicantEmail: '' })
                }
              }}
            />
            {errors.applicantEmail && <p className="text-red-500 ms-[43%] text-xs">{errors.applicantEmail}</p>}
          </div>
          <div className="mb-4">
            <Input
              type="text"
              value={applicantPhone}
              label='Applicant Phone'
              handleChange={(e) => {
                setApplicantPhone(e.target.value);
              }}
            />
          </div>
          <div className="mb-7">
            <div className='flex items-center'>
              <input className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none" aria-describedby="file_input_help" id="file_input" accept='.pdf, .docs, .txt' type="file" multiple/>
            </div>
            <p className="text-xs mt-1" id="file_input_help">PDF, DOCS or TXT</p>
          </div>
          <div className='flex'>
            <button
              onClick={onClose}
              className="me-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[24px] text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[24px] text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;