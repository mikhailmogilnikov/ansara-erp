export interface IFileLoader {
  fileList: File[];
  setFileList: (fileList: File[]) => void;
  isSingle?: boolean;
  buttonTitle?: string;
  multiple?: boolean;
  accept?: string;
}
