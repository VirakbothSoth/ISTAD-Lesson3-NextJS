'use client'
import { useActionState } from 'react';
import { createPost } from '../action';

const initialState = {
  message: '',
}

export default function Form() {
    const [state, formAction, pending] = useActionState(createPost, initialState);

    return (
        <form action={formAction}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" required />
            {state?.message && <p aria-live="polite">{state.message}</p>}
            <button disabled={pending}>Create Post</button>
        </form>
    )
}