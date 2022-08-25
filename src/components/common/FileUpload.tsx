import { InputGroup } from '@chakra-ui/react';
import { ReactNode, useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FileUploadProps = {
  register: UseFormRegisterReturn;
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
};

const FileUpload = (props: FileUploadProps) => {
  // 등록 , 받는 파일 형태 , multiple 다중 선택 가능? , 자식
  const { register, accept, multiple, children } = props;
  // input ref
  const inputRef = useRef<HTMLInputElement | null>(null);
  //
  const { ref, ...rest } = register as { ref: (instance: HTMLInputElement | null) => void };

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={'file'}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
      />
      <>{children}</>
    </InputGroup>
  );
};

export default FileUpload;
