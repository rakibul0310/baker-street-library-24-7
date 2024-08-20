import DropzoneImage from "@/components/DropzoneImage";
import Layout from "@/components/Layout";
import { useAddBookMutation } from "@/services/bookService";
import {
  useAllAuthorQuery,
  useAllMembersQuery,
} from "@/services/widgetService";
import { useRouter } from "next/router";
import React from "react";
import Select from "react-select";

const AddBook = () => {
  const router = useRouter();

  const [image, setImage] = React.useState(null);
  const [author, setAuthor] = React.useState("");
  const [allAuthor, setAllAuthor] = React.useState([]);
  const [owner, setOwner] = React.useState("");
  const [allOwner, setAllOwner] = React.useState([]);
  const [translator, setTranslator] = React.useState("");
  const [allTranslator, setAllTranslator] = React.useState([]);
  const [presentState, setPresentState] = React.useState("");
  const [allPresentState, setAllPresentState] = React.useState([]);
  const [condition, setCondition] = React.useState("");
  const [showAuthorInput, setShowAuthorInput] = React.useState(false);
  const [showTranslatorInput, setShowTranslatorInput] = React.useState(false);
  const [authorName, setAuthorName] = React.useState("");
  const [translatorName, setTranslatorName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [language, setLanguage] = React.useState("");

  const conditions = [
    { label: "Good", value: "good" },
    { label: "Normal", value: "normal" },
    { label: "Bad", value: "bad" },
  ];

  const { data: allAuthorData } = useAllAuthorQuery();
  const { data: allMemberData } = useAllMembersQuery();
  const [addBook, { data, error, isLoading, isSuccess }] = useAddBookMutation();

  React.useEffect(() => {
    if (allAuthorData?.data?.length > 0) {
      setAllAuthor(
        allAuthorData?.data?.map((author) => ({
          label: author.name,
          value: author._id,
        }))
      );

      setAllTranslator(
        allAuthorData?.data?.map((author) => ({
          label: author.name,
          value: author._id,
        }))
      );

      setAllAuthor((prev) => [...prev, { label: "Others", value: "others" }]);
      setAllTranslator((prev) => [
        ...prev,
        { label: "Others", value: "others" },
      ]);
    }
  }, [allAuthorData?.data]);

  React.useEffect(() => {
    if (allMemberData?.data?.length > 0) {
      setAllOwner(
        allMemberData?.data?.map((member) => ({
          label: member.name,
          value: member._id,
        }))
      );

      setAllPresentState(
        allMemberData?.data?.map((member) => ({
          label: member.name,
          value: member._id,
        }))
      );
    }
  }, [allMemberData?.data]);

  React.useEffect(() => {
    if (author?.value === "others") {
      setShowAuthorInput(true);
    } else {
      setShowAuthorInput(false);
    }
  }, [author?.value]);

  React.useEffect(() => {
    if (translator?.value === "others") {
      setShowTranslatorInput(true);
    } else {
      setShowTranslatorInput(false);
    }
  }, [translator?.value]);

  React.useEffect(() => {
    if (isSuccess) {
      setImage(null);
      setAuthor("");
      setOwner("");
      setTranslator("");
      setPresentState("");
      setCondition("");
      setTitle("");
      setDescription("");
      setLanguage("");
      setAuthorName("");
      setTranslatorName("");

      router.push("/dashboard/books");
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      cover: image,
      title,
      description,
      author: showAuthorInput ? authorName : author?.value,
      translator: showTranslatorInput ? translatorName : translator?.value,
      owner: owner?.value,
      present_state: presentState?.value,
      language,
      condition: condition?.value,
    };

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    addBook(formData);
  };

  return (
    <Layout>
      <div className="m-5 p-10 w-[100%] relative">
        <div className="w-[100%] mb-5 bg-gray-300 p-2 rounded-md shadow-sm">
          <h1 className="text-lg font-bold">Add Book</h1>
        </div>
        <div className="w-[100%]">
          <form
            className="flex flex-col justify-center items-start w-[100%]"
            onSubmit={handleSubmit}
          >
            <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="w-[100%] flex flex-col items-start">
                <label className="text-base font-medium">Cover</label>
                {/* <input className="border border-gray-300 w-[100%] p-[0.2rem] mt-1" type="file" /> */}
                {/* Show selected image preview here */}
                {/* <img src="" alt="" /> */}
                <div className="w-[100%] ps-[1rem] pe-[2rem] mt-2 mb-5">
                  <DropzoneImage setImage={setImage} image={image} />
                </div>
              </div>
              <div>
                {/* show accepted image preview here */}
                {image && (
                  <div className="w-[40%] h-[40%] mt-3 mb-5 flex justify-start items-center relative">
                    <img
                      className="w-[100%] h-[100%]"
                      src={URL.createObjectURL(image)}
                      alt=""
                    />
                    <i
                      class="ri-close-line cursor-pointer text-red-600 bg-red-200 absolute top-0 right-0 rounded-full"
                      onClick={() => setImage(null)}
                    ></i>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3 w-[100%] pe-[2rem]">
              <div>
                <label className="text-base font-medium">
                  Title<span className="text-red-600">*</span>
                </label>
                <input
                  className="border border-gray-300 w-[100%] p-[0.3rem] mt-1"
                  type="text"
                  placeholder="Type book title"
                  required={true}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <label className="text-base font-medium">Description</label>
                <textarea
                  className="border border-gray-300 w-[100%]"
                  // rows={2}
                  // cols={50}
                  placeholder="Write something about the book..."
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3 w-[100%] pe-[2rem]">
              <div className="w-[100%]">
                <label className="text-base font-medium">
                  Author<span className="text-red-600">*</span>
                </label>
                <h1 className="text-xs text-red-600">
                  Can't see your author name in the drop-down list? Select
                  "Others" and type your author name.
                </h1>
                <Select
                  className="w-[100%] mt-1"
                  value={author}
                  options={allAuthor}
                  onChange={setAuthor}
                  placeholder="Select author name"
                  required={!showAuthorInput ? true : false}
                />
                {showAuthorInput && (
                  <input
                    className="border border-gray-300 w-[100%] p-[0.3rem] mt-1"
                    type="text"
                    placeholder="Type author name"
                    required={showAuthorInput ? true : false}
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                )}
              </div>
              <div className="w-[100%]">
                <label className="text-base font-medium">Translator</label>
                <h1 className="text-xs text-red-600">
                  Can't see your translator name in the drop-down list? Select
                  "Others" and type your translator name.
                </h1>
                <Select
                  className="w-[100%] mt-1"
                  value={translator}
                  options={allTranslator}
                  onChange={setTranslator}
                  placeholder="Select translator name"
                  required={!showTranslatorInput ? true : false}
                />
                {showTranslatorInput && (
                  <input
                    className="border border-gray-300 w-[100%] p-[0.3rem] mt-1"
                    type="text"
                    placeholder="Type translator name"
                    required={showTranslatorInput ? true : false}
                    onChange={(e) => setTranslatorName(e.target.value)}
                  />
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3 w-[100%] pe-[2rem]">
              <div className="w-[100%]">
                <label className="text-base font-medium">
                  Owner<span className="text-red-600">*</span>
                </label>
                <Select
                  className="w-[100%] mt-1"
                  value={owner}
                  options={allOwner}
                  onChange={setOwner}
                  placeholder="Select owner name"
                  required={true}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-base font-medium">
                  Present State<span className="text-red-600">*</span>
                </label>
                <Select
                  className="w-[100%] mt-1"
                  value={presentState}
                  options={allPresentState}
                  onChange={setPresentState}
                  placeholder="Select currently who has the book"
                  required={true}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3 w-[100%] pe-[2rem]">
              <div>
                <label className="text-base font-medium">
                  Language<span className="text-red-600">*</span>
                </label>
                <input
                  className="border border-gray-300 w-[100%] p-[0.3rem] mt-1"
                  type="text"
                  placeholder="English/Bangla..."
                  required={true}
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-base font-medium">
                  Condition <span className="text-red-600">*</span>
                </label>
                <Select
                  className="w-[100%] mt-1"
                  value={condition}
                  options={conditions}
                  onChange={setCondition}
                  placeholder="Select book condition"
                  required={true}
                />
              </div>
            </div>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-3 w-[100%] pe-[2rem]">
              <div className="w-[100%]">
                <label className="text-base font-medium cursor-not-allowed">
                  Genre
                </label>
                <Select
                  className="w-[100%] mt-1"
                  value={null}
                  options={[]}
                  // onChange={handleChange}
                  isDisabled={true}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-base font-medium">Price</label>
                <input
                  className="border cursor-not-allowed border-gray-300 w-[100%] p-[0.2rem] mt-1"
                  type="number"
                  disabled={true}
                />
              </div>
            </div> */}
            <div className="w-[100%] flex justify-end items-center pe-[2rem] my-3">
              {isLoading ? (
                <Spinner />
              ) : (
                <button
                  className="px-8 py-2 bg-green-400 text-gray-700 font-medium rounded-md hover:bg-green-500 hover:text-white transition-all duration-300"
                  type="submit"
                >
                  Add
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddBook;
