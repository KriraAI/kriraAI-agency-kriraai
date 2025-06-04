'use client';

  import React, { useState } from 'react';
  import Head from 'next/head';
  import dynamic from 'next/dynamic';
  import { useRouter } from 'next/navigation';
  import { collection, addDoc, Timestamp } from 'firebase/firestore';
  import { db } from '../../../../../firebaseConfig';

  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
  import 'react-quill/dist/quill.snow.css';

  type TocSection = {
    heading: string;
    headingTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    text?: string;
    paragraph: string;
    image: string;
  };

  type Author = {
    name: string;
    designation: string;
    image: string;
  };

  export default function CreateBlogPage() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [tags, setTags] = useState('');
    const [author, setAuthor] = useState<Author>({ name: '', designation: '', image: '' });
    const [authorImagePreview, setAuthorImagePreview] = useState('');
    const [tocSections, setTocSections] = useState<TocSection[]>([
      { heading: '', headingTag: 'h2', paragraph: '', image: '', text: '' },
    ]);
    const [tocImagePreviews, setTocImagePreviews] = useState<string[]>(['']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = async (
      e: React.ChangeEvent<HTMLInputElement>,
      setFunc: (url: string) => void,
      setPreviewFunc: (url: string) => void
    ) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setPreviewFunc(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append('image', file);

      try {
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        if (res.ok && data.imagePath) {
          setFunc(data.imagePath);
        } else {
          setError('Image upload failed');
        }
      } catch {
        setError('Image upload failed');
      }
    };

    const addTocSection = () => {
      setTocSections([...tocSections, { heading: '', headingTag: 'h2', paragraph: '', image: '', }]);
      setTocImagePreviews([...tocImagePreviews, '']);
    };

    const removeTocSection = (index: number) => {
      if (tocSections.length === 1) return;
      setTocSections(tocSections.filter((_, i) => i !== index));
      setTocImagePreviews(tocImagePreviews.filter((_, i) => i !== index));
    };

    // const handleTocChange = (index: number, field: keyof TocSection, value: string) => {
    //   const updated = [...tocSections];
    //   updated[index][field] = value;
    //   setTocSections(updated);
    // };
const handleTocChange = (
  index: number,
  field: keyof TocSection,
  value: string
) => {
  const updated = [...tocSections];

  if (field === 'heading') {
    updated[index].heading = value;
  } else if (field === 'paragraph') {
    updated[index].paragraph = value;
  } else if (field === 'image') {
    updated[index].image = value;
  } else if (field === 'text') {
    updated[index].text = value;
  } else if (field === 'headingTag') {
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)) {
      updated[index].headingTag = value as TocSection['headingTag'];
    }
  }

  setTocSections(updated);
};

    const handleTocImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const previewUrl = URL.createObjectURL(file);
      const updatedPreviews = [...tocImagePreviews];
      updatedPreviews[index] = previewUrl;
      setTocImagePreviews(updatedPreviews);

      const formData = new FormData();
      formData.append('image', file);

      try {
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        if (res.ok && data.imagePath) {
          handleTocChange(index, 'image', data.imagePath);
        } else {
          setError('TOC image upload failed');
        }
      } catch {
        setError('TOC image upload failed');
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');

      if (
        !title ||
        !slug ||
        !description ||
        !image ||
        !publishDate ||
        !author.name ||
        !author.designation ||
        !author.image ||
        tocSections.some((section) => !section.heading.trim() || !section.paragraph.trim())
      ) {
        setError('Please fill all required fields and TOC sections.');
        return;
      }

      const publishTimestamp = Timestamp.fromDate(new Date(publishDate));
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(Boolean);

      setLoading(true);

      try {
        const id = Date.now().toString();

        await addDoc(collection(db, 'blogs'), {
          id,
          title,
          slug,
          description,
          image,
          publishDate: publishTimestamp,
          tags: tagsArray,
          author,
          metaTitle,
          metaDescription,
          tableOfContents: tocSections,
        });

        setLoading(false);
        router.push('/admin/blog');
      } catch (err) {
        console.error('Error creating blog:', err);
        setError('Failed to create blog. Please try again.');
        setLoading(false);
      }
    };

    return (
      <>
        <Head>
          <title>{metaTitle || 'Create Blog'}</title>
          <meta name="description" content={metaDescription || 'Create a new blog post'} />
        </Head>

        <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded shadow">
          <h1 className="text-3xl font-bold mb-6 text-center">Create Blog Post</h1>

          {error && <p className="mb-4 text-red-600">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block font-semibold">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold">Slug (Url)</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value.replace(/\s+/g, '-').toLowerCase())}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Meta Fields */}
            <div>
              <label className="block font-semibold">Meta Title</label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold">Meta Description</label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={2}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold">Description</label>
              <ReactQuill theme="snow" value={description} onChange={setDescription} />
            </div>

            {/* Main Image */}
            <div>
              <label className="block font-semibold">Main Image</label>
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setImage, setImagePreview)} />
              {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 max-h-40" />}
            </div>

            {/* Publish Date & Tags */}
            <div>
              <label className="block font-semibold">Publish Date</label>
              <input
                type="date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold">Tags (comma separated)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Author Info */}
            <fieldset className="border p-4 rounded">
              <legend className="font-semibold">Author</legend>
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                value={author.name}
                onChange={(e) => setAuthor({ ...author, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
              <label className="block font-semibold mt-2">Designation</label>
              <input
                type="text"
                value={author.designation}
                onChange={(e) => setAuthor({ ...author, designation: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
              <label className="block font-semibold mt-2">Author Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, (url) => setAuthor({ ...author, image: url }), setAuthorImagePreview)}
              />
              {authorImagePreview && <img src={authorImagePreview} alt="Author Preview" className="mt-2 max-h-32" />}
            </fieldset>

            {/* Table of Contents */}
            <fieldset className="border p-4 rounded">
              <legend className="font-semibold mb-3">Table of Contents</legend>
              {tocSections.map((section, idx) => (
                <div key={idx} className="mb-6 border p-3 rounded bg-gray-50 relative">
                  <button
                    type="button"
                    onClick={() => removeTocSection(idx)}
                    className="absolute top-1 right-1 text-white bg-red-500 px-2 rounded"
                  >
                    X
                  </button>
                  <label className="block font-semibold mb-1">Heading</label>
                  <input
                    type="text"
                    value={section.heading}
                    onChange={(e) => handleTocChange(idx, 'heading', e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                  <label className="block font-semibold mt-2 mb-1">Heading Tag</label>
                  <select
                    value={section.headingTag}
                    onChange={(e) => handleTocChange(idx, 'headingTag', e.target.value as TocSection['headingTag'])}
                    className="w-full border rounded px-3 py-2"
                  >
                    {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(tag => (
                      <option key={tag} value={tag}>{tag.toUpperCase()}</option>
                    ))}
                  </select>
                  <label className="block font-semibold mt-3 mb-1">Paragraph</label>
                  <ReactQuill
                    theme="snow"
                    value={section.paragraph}
                    onChange={(value) => handleTocChange(idx, 'paragraph', value)}
                  />
                  <label className="block font-semibold mt-3 mb-1">Section Image</label>
                  <input type="file" accept="image/*" onChange={(e) => handleTocImageUpload(e, idx)} />
                  {tocImagePreviews[idx] && (
                    <img src={tocImagePreviews[idx]} alt={`TOC Section ${idx + 1} Preview`} className="mt-2 max-h-40" />
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addTocSection}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Section
              </button>
            </fieldset>

            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white px-6 py-3 rounded w-full text-lg"
            >
              {loading ? 'Creating...' : 'Create Blog'}
            </button>
          </form>
        </div>
      </>
    );
  }
